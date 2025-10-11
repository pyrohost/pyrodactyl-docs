import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { DocsPage, DocsBody, DocsTitle, DocsDescription } from 'fumadocs-ui/page';
import { Tab, Tabs } from 'fumadocs-ui/components/tabs';
import { Callout } from 'fumadocs-ui/components/callout';
import { Card, Cards } from 'fumadocs-ui/components/card';
import defaultMdxComponents, { createRelativeLink } from 'fumadocs-ui/mdx';
import { source } from '@/lib/source';

interface PageParams {
  params: Promise<{
    slug?: string[];
  }>;
}

export default async function Page({ params }: PageParams) {
  const { slug } = await params;
  const page = await source.getPage(slug);

  if (!page) {
    notFound();
  }

  const MDXContent = page.data.body;

  return (
    <DocsPage 
      toc={page.data.toc} 
      tableOfContent={{
        enabled: true,
        style: 'clerk'
      }}
      lastUpdate={page.data.lastModified ? new Date(page.data.lastModified) : undefined}
      editOnGithub={{
        owner: 'pyrohost',
        repo: 'pyrodactyl-docs',
        sha: 'main',
        path: `content/docs/${page.file.path}`,
      }}
      full={page.data.full}
    >
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription>{page.data.description}</DocsDescription>
      <DocsBody>
        <MDXContent
          components={{
            ...defaultMdxComponents,
            a: createRelativeLink(source, page),
            Tabs,
            Tab,
            Callout,
            Card,
            Cards
          }}
        />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata({ params }: PageParams): Promise<Metadata> {
  const { slug } = await params;
  const page = await source.getPage(slug);

  if (!page) return {};

  return {
    title: page.data.title,
    description: page.data.description,
  };
}

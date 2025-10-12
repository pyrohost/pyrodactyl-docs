import { DocsLayout } from 'fumadocs-ui/layouts/notebook';
import type { ReactNode } from 'react';
import { baseOptions } from '@/app/layout.config';
import { source } from '@/lib/source';
import { GithubInfo } from 'fumadocs-ui/components/github-info';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      {...baseOptions}
      tree={source.pageTree}
      links={[
        {
          type: 'custom',
          children: (
            <GithubInfo
              owner="pyrohost"
              repo="pyrodactyl"
              className="lg:-mx-2"
              token={process.env.GITHUB_TOKEN}
            />
          ),
        },
      ]}
    >
      {children}
    </DocsLayout>
  );
}
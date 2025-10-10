import type { Metadata } from "next";
import Image from "next/image";

import { PyroButton } from "@/components/ui/PyroButton";
import PyroPill from "@/components/ui/PyroPill";

import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { BookOpenText, Flame, Accessibility, Rocket, CircleFadingArrowUp, Boxes, CodeXml } from "lucide-react";

export const metadata: Metadata = {
	metadataBase: new URL('https://pyrodactyl.dev'),
	title: "Pyro - Pyrodactyl",
	description:
		"Pyrodactyl is an open, secure, and scalable servers platform. It's the world's best Pterodactyl panel with incredible performance and unmatched features.",
	openGraph: {
		title: "Pyro - Pyrodactyl",
		description:
			"Pyrodactyl is an open, secure, and scalable servers platform. It's the world's best Pterodactyl panel with incredible performance and unmatched features.",
		images: [{ url: "/og_pyrodactyl.png" }],
	},
};

const features = [
	{
		title: "Built with Vite",
		description: "Pyrodactyl is built with Vite, the fastest and most reliable build tool for JavaScript.",
	    icon: <Flame size={23} />
	},
	{
		title: "Accessibility at the core",
		description: "Pyro is commited to making our software accessible to everyone. Pyrodactyl is no exception.",
	    icon: <Accessibility size={23} />
	},
	{
		title: "Optimized to pieces",
		description: "Pyrodactyl builds in less than 150 milliseconds, and renders up to 70% faster than the original panel.",
	    icon: <Rocket size={23} />
	},
	{
		title: "Modern, scalable, and secure",
		description: "The only outdated aspect of Pyrodactyl is the name. Everything else is absolutely cutting-edge.",
	    icon: <CircleFadingArrowUp size={23} />
	},
	{
		title: "Batteries included",
		description: "It's everything you need, out-of-the-box. There's no need to install plugins or themes.",
	    icon: <Boxes size={23} />
	},
	{
		title: "Open source",
		description: "Pyrodactyl is the first (and only) panel that a company has made its source publicly available.",
	    icon: <CodeXml size={23} />
	},
];

const buildTimes = [
	{ name: "Pyrodactyl (Vite and Turbo)", time: "87 ms", width: "1.145%", highlight: true },
	{ name: "Pterodactyl v1 (Webpack 4)", time: "35.3 sec", width: "77.7%" },
	{ name: "Pterodactyl v2 (Webpack 4)", time: "39.42 sec", width: "87.62%" },
	// Outdated
	// { name: "Pelican (Webpack 4)", time: "40.9 sec", width: "90.88%" },
];

const Page = () => {
	return (
		<>
			<div className="relative z-10 h-full max-h-[800px] w-full overflow-clip rounded-3xl bg-gray-50 dark:bg-[#111] text-white">
				<div className="relative mx-auto flex h-full w-full container flex-col items-center px-6">
					<div className="z-10 mx-auto mt-12 flex h-full w-full flex-col items-center justify-between gap-8 lg:flex-row lg:gap-0">
						<h1 className="w-full font-extrabold text-[max(30px,min(5vw,42px))] leading-[1.2] tracking-[-0.14rem] drop-shadow-xl lg:w-1/2 text-gray-900 dark:text-gray-100">
							Pyrodactyl is an open, secure, and scalable servers platform
						</h1>
						<div className="flex w-full flex-col gap-8 lg:w-1/3 lg:gap-4">
							<p className="text-gray-600 dark:text-[#ffffffbb] text-[20px] leading-[155%]">
								It&apos;s the world&apos;s best Pterodactyl panel. Unmatched performance and features.
							</p>
							<div className="flex gap-2 flex-col">
								<PyroButton variant="secondary" href="/docs" isArrow>
									<BookOpenText size={16} /> View Documentation
								</PyroButton>
								<PyroButton variant="secondary" href="https://github.com/pyrohost/pyrodactyl" isArrow external>
									<GitHubLogoIcon /> Star on GitHub
								</PyroButton>
							</div>
						</div>
					</div>
					<div className="relative mt-8 min-h-[750px] w-full">
						<Image 
							src="/img/panelhero_2x.png" 
							width={2072} 
							height={1232} 
							className="w-full" 
							alt="Pyrodactyl panel interface preview" 
							quality={85}
							priority
							loading="eager"
						/>
					</div>
				</div>
			</div>
			<section className="relative z-10 w-full overflow-clip rounded-3xl rounded-b-none bg-gray-50 dark:bg-[#111]">
				<div
					className="container relative grid gap-12 pt-24 lg:pt-24 pb-20 lg:gap-20 lg:py-40"
					style={{ "--circle-background": "#FF4438" } as React.CSSProperties}
				>
					<div className="pointer-events-none absolute bottom-0 left-0 z-[0] h-[676px] w-[676px] scale-[1.75] rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[--circle-background] to-70% to-[transparent] opacity-[12%] xl:right-[50px] xl:left-auto" />
					<div className="relative z-[14] flex max-w-[750px] flex-col items-start justify-start">
						<PyroPill>Pyrodactyl by the numbers</PyroPill>
						<h1 className="mb-6 max-w-4xl font-extrabold text-[max(48px,min(5vw,90px))] leading-[1.09] tracking-tighter text-gray-900 dark:text-white">
							<span className="bg-gradient-to-br from-brand via-red-400 to-orange-500 bg-clip-text text-transparent">170x smaller.</span> <br />
							<span className="bg-gradient-to-br from-brand via-red-400 to-orange-500 bg-clip-text text-transparent">17x faster.</span>
						</h1>
						<p className="mb-6 font-medium text-gray-600 dark:text-[#ffffff99] text-xl leading-[190%]">
							We&apos;ve rebuilt Pterodactyl from the ground up. Pyrodactyl is 170 times smaller and 17 times faster than the original panel. No one else can say that.
						</p>
					</div>

					<div className="grid grid-cols-1 gap-12 md:grid-cols-3">
						{features.map((feature) => (
							<div key={feature.title} className="col-span-1">
								<div className="flex flex-col gap-1">
									<span className="font-bold text-brand text-lg flex">{feature.icon}&nbsp;{feature.title}</span>
									<span className="text-gray-600 dark:text-gray-300">{feature.description}</span>
								</div>
							</div>
						))}
					</div>

					<div className="relative chart w-full flex flex-col gap-4">
						<div className="absolute right-0 top-8 bottom-8 w-0.5 bg-[#ffffff44]" />
						<h1 className="mb-2 max-w-4xl font-extrabold text-[max(30px,min(5vw,42px))] leading-[1.09] tracking-tighter">Build times comparison</h1>
						{buildTimes.map((item) => (
							<div key={item.name} className="chart-row flex flex-row items-center gap-8 ">
								<p className="text-sm font-bold whitespace-nowrap w-60">{item.name}</p>
								<div className="w-full flex flex-row items-center gap-2">
									<div 
										className={`chart-bar rounded-sm h-4 ${item.highlight ? 'dark:bg-brand bg-red-600' : 'dark:bg-[#ffffff77] bg-black'}`} 
										style={{ width: item.width }}
									/>
									<span className="text-xs font-bold whitespace-nowrap">{item.time}</span>
								</div>
							</div>
						))}

						<p className="text-xs max-w-sm opacity-50 mt-4">
							Tested on a 16-inch Macbook Pro, M3 Max, 48 GB RAM. Caching options for Webpack and Turbo were enabled. Build commands were run in
							iTerm2 with no other applications active. npm v10.8.1.
						</p>
						<p className="text-xs max-w-sm opacity-50">
							<strong>Note:</strong> These benchmarks were done in 2024 and may not represent current build times.
						</p>
					</div>
				</div>
			</section>
		</>
	);
};

export default Page;

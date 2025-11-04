import { docs } from '@/.source';
import { loader } from 'fumadocs-core/source';
import { createElement } from 'react';
import { icons } from 'lucide-react';
import PyrodactylLogo from '@/components/ui/PyrodactylLogo';
import BlueprintLogo from '@/components/ui/BlueprintLogo';
import { Bird } from "lucide-react"

// `loader()` also assign a URL to your pages
// See https://fumadocs.vercel.app/docs/headless/source-api for more info
export const source = loader({
    baseUrl: '/docs',
    source: docs.toFumadocsSource(),
    icon(icon) {
        if (!icon) {
            return
        }
        switch (icon) {
            case 'pyrodactyl':
                return PyrodactylLogo();
            case 'blueprint':
                return BlueprintLogo();
            case 'elytra':
                // WARNING: Temp fix until we have a proper icon for elytra
                return createElement(Bird);
        }

        if (icon in icons) return createElement(icons[icon as keyof typeof icons]);
    },
});


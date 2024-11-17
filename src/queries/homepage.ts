// src/queries/homepage.ts
export interface HomepageContent {
    homepage: {
        content: Array<{
            id: string;
            _modelApiKey: string;
            content: {
                value: string;
            };
        }>;
    };
}

export const HOMEPAGE_QUERY = `
    query GetHomepageContent($locale: SiteLocale) {
        homepage {
            content(locale: $locale) {
                ... on ContentRecord {
                    id
                    _modelApiKey
                    content {
                        value
                    }
                }
            }
        }
    }
`;

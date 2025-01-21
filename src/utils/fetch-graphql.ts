interface GraphQLError {
    message: string;
    locations?: Array<{ line: number; column: number }>;
    path?: string[];
    extensions?: Record<string, unknown>;
}

interface FetchGraphQLResult<T> {
    data?: T;
    errors?: GraphQLError[];
}

export async function fetchGraphQL<T>(
    query: string,
    variables: Record<string, unknown> = {}
): Promise<T | null> {
    try {
        const response = await fetch('https://graphql.datocms.com/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: `Bearer ${import.meta.env.DATOCMS_API_KEY}`,
            },
            body: JSON.stringify({
                query,
                variables,
            }),
        });

        const result: FetchGraphQLResult<T> = await response.json();

        if (!response.ok || result.errors) {
            const errorMessage = result.errors
                ? result.errors.map((err) => err.message).join(', ')
                : 'Failed to fetch data';
            throw new Error(`Error: ${errorMessage}`);
        }

        return result.data ?? null;
    } catch (error) {
        console.error('Error fetching GraphQL data:', error);
        return null;
    }
}
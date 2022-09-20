import React from 'react';
import { useRouter } from 'next/router';

const NoteBooksDetailPage = () => {
    const { query } = useRouter();

    console.log('query', query);

    return (
        <div>
            <h1>Notebooks detail page</h1>
        </div>
    );
};

export default NoteBooksDetailPage;

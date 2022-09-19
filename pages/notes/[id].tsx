import React from 'react';
import { useRouter } from 'next/router';

const NotesDetailPage = () => {
    const { query } = useRouter();

    console.log('query', query);

    return (
        <div>
            <h1>Notes detail page</h1>
        </div>
    );
};

export default NotesDetailPage;

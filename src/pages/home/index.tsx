import { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const Home: NextPage = () => {
    const router = useRouter();

    function goToDetailPage() {
        router.push({
            pathname: '/posts/[postId]',
            query: {
                postId: 123,
                ref: 'social',
            }
        })
    }

    return (
        <div>
            <h1>Link to: 
                <Link href={"/posts"}>All Posts</Link>
            </h1>

            <button onClick={goToDetailPage}>Go to post detail page</button>

            <div style={{ marginTop: '1500px' }}>
                <Link href={"/about"}>
                    Go to About
                </Link>
            </div>
        </div>
    )
}

export default Home;
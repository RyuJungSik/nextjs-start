import axios from 'axios';
import Head from 'next/head';
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
import { Loader } from 'semantic-ui-react';
import Item from '../../src/component/Item';

const Post = ({ item, name }) => {
    return (
        <>
            <Head>
                <title>{item.name}</title>
                <meta name="description" content={item.description}></meta>
            </Head>
            {item ?
                (<Item item={item} />)
                :
                (<h1>no</h1>)}
        </>
    );
};

export default Post;

export async function getServerSideProps(context) {
    const id = context.params.id;
    const apiUrl = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
    const res = await axios.get(apiUrl);
    const data = res.data;

    return {
        props: {
            item: data,
            name : process.env.name
        },
    };
}


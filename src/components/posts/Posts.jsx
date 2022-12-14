import React from 'react';
import Post from '../post/Post';
import './posts.scss';

const Posts = () => {
    // TEMPORARY
    const posts = [
        {
            id: 1,
            name: 'Muhammad Riyansyah',
            userId: 1,
            profilePic:
                'https://scontent-sin6-2.xx.fbcdn.net/v/t39.30808-6/289175301_699852171078625_6726696324010982522_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFXnB9hFNVulemNUkjkXB13Ft3zQM50N3wW3fNAznQ3fIv_Ztasj1Z0at3dcx4pQcqVFd72NBYq1XFUFZC4Xxhj&_nc_ohc=Md_IBVEAW8QAX_uW6_o&_nc_ht=scontent-sin6-2.xx&oh=00_AfCho8LM-IT7SsVYE8BlzF96yBm_qRwfmam2nlVZqN9g2Q&oe=639C5370',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, incidunt.',
            img: 'https://scontent-sin6-1.xx.fbcdn.net/v/t39.30808-6/281399712_679459803117862_291582771525604953_n.jpg?stp=dst-jpg_p180x540&_nc_cat=111&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeG2nsgPSUSbv-NxfH5ExG2IZ2TBGSaPuABnZMEZJo-4AO9imS6j4dWxyuwROi-fNQ5S_wUzegaNp16-cX9oxkAA&_nc_ohc=KzqgdzOvVT8AX-wz8JK&_nc_ht=scontent-sin6-1.xx&oh=00_AfBtBwWRGYbbIB9IGxkjKH_ks07DiMxUezfcYpyM0QznzA&oe=639D8401',
        },
        {
            id: 2,
            name: 'Bambang Ali Bandra',
            userId: 2,
            profilePic:
                'https://scontent-sin6-3.xx.fbcdn.net/v/t39.30808-6/298244613_1505577929891578_3971570652708191335_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeG5SnJP4ndLQlVgsN3q5Y2_uDkmlysBPQi4OSaXKwE9CP-VSo_TkdH8PXuMOkTLPOw7W6dRVXoZTDFqg2BWggtx&_nc_ohc=6_NdxhjcDUQAX-4Tldc&_nc_ht=scontent-sin6-3.xx&oh=00_AfDBuPET24MTo9T09twPDZ3Mj6Oc3__inRpmwt4nu9P4lw&oe=639D779A',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae dicta neque obcaecati hic doloremque. Temporibus officiis nobis harum. Odit, sit.',
        },
    ];
    return (
        <div className='posts'>
            {posts.map((post) => (
                <Post post={post} key={post.id} />
            ))}
        </div>
    );
};

export default Posts;

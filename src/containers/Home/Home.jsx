import { useEffect, useState } from "react";
import { ContantWrapper } from "../Contant/ContantStyle";
import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';
import {CardWrapper,Card,CardImage,CardBody,CardTitle,CradText} from "../Home/HomeStyle";
import Image from '../../images/download.png';
import axios from 'axios';


const Home = () => {
    const [posts,setPost]= useState([])
    useEffect(()=> {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            console.log(res.data);
            setPost(res.data)
           
        })
        .catch(err=>{
            console.log(err)
        })
    },[])

    
    return (
        <div>
            <Header/>
            <Sidebar/>
            <ContantWrapper>
                <CardWrapper>
                {posts.map(post => (
                    <Card key= {post.id}>
                        <CardImage src={Image} alt="My logo" ></CardImage>
                        <CardBody>
                            <CardTitle>{post.title}</CardTitle>
                            <CradText>{post.body}</CradText>
                            <button>Read More</button>
                        </CardBody>
                    </Card>
                ))}
                    

                    
                </CardWrapper>
            </ContantWrapper>
        </div>
    )
}

export default Home;
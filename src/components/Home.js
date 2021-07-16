import React from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom'


const Home = () => {
    return (
        <Header title='amazing recipes'>
            <Link to='Recipes' className='text-uppercase btn btn-secondary btn-lg mt-4'>
                search recipes
            </Link>
        </Header>
    );

}

export default Home;
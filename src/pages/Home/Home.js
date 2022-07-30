import React from 'react';
import Packages from '../../components/Packages/Packages';
import SearchForm from '../../components/SearchForm/SearchForm';

const Home = () => {
    return (
        <div>
            <SearchForm />
            <Packages/>
        </div>
    );
};

export default Home;
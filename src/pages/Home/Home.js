import React from 'react';
import Packages from '../../components/Packages/Packages';
import PromoOffer from '../../components/PromoOffer/PromoOffer';
import SearchForm from '../../components/SearchForm/SearchForm';

const Home = () => {
    return (
        <div>
            <SearchForm />
            <PromoOffer />
            <Packages/>
        </div>
    );
};

export default Home;
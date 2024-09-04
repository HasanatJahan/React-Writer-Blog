import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from './useFetch';

function Home() {
    const { data: blogs, isPending, error } = useFetch('http://localhost:3000/blogs');

    return (
        <div className="home">
            <h2>Homepage</h2>

            {/* Output the error if there is an error message */}
            {error && <div>{error}</div>}

            {isPending && <div>Loading blogs ... </div>}
            {blogs && < BlogList blogs={blogs} title="All Blogs!" />}
        </div >
    );
}

export default Home;
import { useState } from "react";

function Home() {
    const [blogs, setBlogs] = useState([
        { title: "Miracle ways to cover foot fungus", body: "Syke there is none stinky", author: "deranged", id: 1 },
        { title: "How to stop hating yourself", body: "Syke there is none depressy", author: "sad", id: 2 },
        { title: "Actual helpful article please click", body: "Syke there is none dummy", author: "Noam Chomsky", id: 3 }
    ]);

    return (
        <div className="home">
            <h2>Homepage</h2>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p1>Written by {blog.author}</p1>
                </div>
            ))
            }
        </div >
    );
}

export default Home;
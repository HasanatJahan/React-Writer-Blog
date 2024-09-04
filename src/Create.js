import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        // prevent default action of the form being submitted
        e.preventDefault();
        const blog = { title, body, author };

        // Used for handling loading of blogs
        setIsPending(true);

        // make a post request 
        fetch('http://localhost:3000/blogs', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then(() => {
            console.log("new blog added");
            setIsPending(false);
            // history.go(-1); -- go back to the last page in history 
            // go back to the home page 
            history.push('/');
        })
    }

    return (
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog body:</label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                >
                </textarea>
                <label>Blog Author</label>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="Carrie Bradshaw">Carrie Bradshaw</option>
                    <option value="Mia">Mia</option>
                    <option value="My boy Tolkien">My boy Tolkien</option>
                </select>

                {!isPending && <button> Add blog</button>}
                {isPending && <button disabled> Adding blog...</button>}

                {/* Testing out the inputs */}
                <p>{title}</p>
                <p>{body}</p>
                <p>{author}</p>
            </form>
        </div >
    );
}

export default Create;
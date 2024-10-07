

const Product=({post})=>{
    return (
        <div>
            <div>
                <p>{post.title}</p>
            </div>
            <div>
                <p>{post.description}</p>
            </div>
            <div>
                <img src=""></img>
            </div>
            <div>
                <p>{post.peice}</p>
            </div>
            <button>
                Add to cart
            </button>

        </div>
    );
};

export default Product;
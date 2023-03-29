
function ProductList({ product }) {
    return (
        <>
            <div className="container mt-4 mx-auto">
                <div>
                    {
                        product.map((item, index) => {
                            return (
                                <div key={index} style={{ margin: 'auto', width: '80%' }}>
                                    <h1>{item.title}</h1>
                                    <img src={item.image} height="200" style={{ padding: '30px' }} />
                                    <hr></hr>
                                    <h3>{ item.price }</h3> <br/>
                                    <p>{item.description }</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default ProductList;
import { useParams } from "react-router-dom"


export const Producs = () => {
    const params = useParams();

    return (
        <>
        <h2>Producs Page</h2>
        <h3>Produc {params.productId} specifivation</h3>
        </>
    )
}
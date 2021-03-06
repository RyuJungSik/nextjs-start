import { Button } from "semantic-ui-react";

export default function Item({item}) {
    const{image_link, name, price, description, updated_at, category, product_type, product_link,}=item;

    return (
        <>
            <div>
                <img src={image_link} alt={name} />
            </div>
            <div>
                <p><strong>{name}</strong></p>
                <p><strong>${price}</strong></p>
                <p><strong>{product_type}</strong></p>
            </div>
            <Button color="orange">구매하기</Button>
            <div>
                <p>{description}</p>
            </div>
        </>
    );
}

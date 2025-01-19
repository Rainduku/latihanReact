import { useParams } from "react-router-dom";

const Category = () => {//dinamic routing untuk mengirim parameter yang dimanfaatkan dikomponen
    const params = useParams();

    return <h3>ini halaman Category {params.name}</h3>
};

export default Category;
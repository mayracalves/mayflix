import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import { Link } from 'react-router-dom';

function CadastroCategoria() {
    const valoresIniciais = {
        nome: '',
        descricao: '',
        cor: '#fff',
    }
    const [categorias, setCategorias] = useState([]);
    const [values, setValues] = useState(valoresIniciais);


    function setValue(chave, valor) {
        setValues({
            ...values,
            [chave]: valor,
        })
    }

    // function handleChange(infos) {
    //     const { value } = infos.target;
    //     setValue(infos.target.getAttribute('name'), value)
    // }

    function handleChange(infos) {
        const { name, value } = infos.target;
        setValue(name, value);
    };

    return (
        <PageDefault>
            <h1>Cadastro da categoria: {values.nome}</h1>

            <form onSubmit={function handleSubmit(event) {
                event.preventDefault();
                setCategorias([
                    ...categorias,
                    values
                ]);

                setValues(valoresIniciais);
            }}>

                {/* <div>
                    <label>
                        Nome da Categoria
                            <input
                            type="text"
                            value={values.nome}
                            name="nome"
                            onChange={handleChange}
                        />
                    </label>
                </div> */}

                <FormField
                    label="Nome: "
                    type="text"
                    name="nome"
                    value={values.nome}
                    onChange={handleChange}
                />

                <div>
                    <label>
                        Descrição:
                        <textarea
                            type="text"
                            value={values.descricao}
                            name="descricao"
                            onChange={handleChange}
                        ></textarea>
                    </label>
                </div>

                <FormField
                    label="Cor: "
                    type="color"
                    name="cor"
                    values={values.cor}
                    onChange={handleChange}
                />

                {/* <div>
                    <label>
                        Cor da Categoria
                        <input
                            type="color"
                            value={values.cor}
                            name="cor"
                            onChange={handleChange}
                        />
                    </label>
                </div> */}

                <button>Cadastrar</button>
            </form>

            <ul>
                {categorias.map((categoria, indice) => {
                    return (
                        <li key={`${categoria}${indice}`}>
                            {categoria.nome}
                        </li>
                    )
                })}
            </ul>

            <Link to="/">
                Ir para home
            </Link>
        </PageDefault>
    )
}

export default CadastroCategoria;
import React from 'react'
import { connect } from 'react-redux';
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min';
import { Link } from "react-router-dom";
import cellEditFactory from 'react-bootstrap-table2-editor/dist/react-bootstrap-table2-editor.min';
import { actions } from '../redux-modules/reducers/actions';

const { SearchBar, ClearSearchButton } = Search;

const headerSortingStyle = { backgroundColor: '#c8e6c9' };

const table = (props) => {
    let productForDeleting = []

    const columns = [
        {
            dataField: 'checkbox',
            text: 'x'
        },
        {
            dataField: 'id',
            text: 'Product ID',
            filter: textFilter(),
            sort: true,
            searchable: false,
            headerSortingStyle
        }, {
            dataField: 'title',
            text: 'Title',
            filter: textFilter(),
            sort: true,
            searchable: true,
            headerSortingStyle
        }
        , {
            dataField: 'description',
            text: 'Description',
            filter: textFilter(),
            searchable: false,


        },
        {
            dataField: 'price',
            text: 'Price',
            filter: textFilter(),
            sort: true,
            searchable: false,
            headerSortingStyle
        },
        {
            dataField: 'img',
            text: 'Photo',
            sort: true,
            searchable: false
        },
        {
            dataField: 'rating',
            text: 'Rating',
            filter: textFilter(),
            sort: true,
            searchable: false,
            headerSortingStyle
        },
        {
            dataField: 'stock',
            text: 'Stock',
            filter: textFilter(),
            sort: true,
            searchable: false,
            headerSortingStyle
        },
        {
            dataField: 'category',
            text: 'Category',
            filter: textFilter(),
            sort: true,
            searchable: true,
            headerSortingStyle
        },
    ];

    const handleOnSelect = (row, isSelect) => {
        productForDeleting.push(row)

    }


    const handleBtnClick = () => {
        props.removeProduct(productForDeleting);
    }


    return (
        <div>
            <ToolkitProvider
                keyField="id"
                data={props.products
                    .map(x => {
                        if (x.images) {
                            x.img = <img width="100" src={x.images[0]}></img>
                        }
                        x.checkbox = <input type="checkbox" onClick={() => handleOnSelect(x)} />
                        return x;
                    })
                }
                columns={columns}
                search

            >

                {
                    props => (
                        <div>
                            <h3>Please make your choice:</h3>
                            <SearchBar {...props.searchProps} />
                            <hr />
                            <button className="btn btn-success" onClick={handleBtnClick}>Delete selected products</button>
                            <BootstrapTable bootstrap4 hover condensed striped
                                filter={filterFactory()}
                                {...props.baseProps}
                                cellEdit={cellEditFactory({ mode: 'dbclick' })}
                            />
                        </div>
                    )
                }
            </ToolkitProvider>
            <Link to="/">
                <button>Back Home</button>
            </Link>
        </div>
    )
}
const mapStateToProps = (state) => {
    return state
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeProduct: (productsData) => dispatch({ type: actions.REMOVE_PRODUCT, productsData })
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(table);
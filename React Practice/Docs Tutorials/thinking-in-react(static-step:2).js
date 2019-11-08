/*
  To reinforce knowledge and understanding, after looking into the original code I wrote a few steps
  guide on a piece of paper and with only the concepts used on the exercise I tried to replicate the
  code original architecture.
*/

class ProductCategoryRow extends React.Component {
  //Error: 1 -> All variables and operations inside render()
  render() {
    const category = this.props.category;
    return (
      <tr>
        <th colSpan="2">
          {category}
        </th>
      </tr>
    );
  }
}

class ProductRow extends React.Component {
  //Error: 2 -> All variables and operations inside render()
  render() {
    const product = this.props.product;
    const name = product.stocked ?
      product.name :
      <span style={{color: 'red'}}> {product.name} </span>;

    return (
      <tr>
        <td>{name}</td>
        <td>{product.price}</td>
      </tr>
    );
  }
}

class ProductTable extends React.Component {
  //Error: 3 -> All variables and operations inside render()
  render() {
    let last = null;
    const rows = [];

    this.props.products.forEach((product) => {
      if (product.category !== last) {
        rows.push(
          <ProductCategoryRow
            category={product.category}
            key={product.category} />
        );
      }
        rows.push(
          <ProductRow
            product={product}
            key={product.name} />
        );
      last = product.category;
    });

    return (
     <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
       <tbody>{rows}</tbody>
     </table>
    );
  }
}

class SearchBar extends React.Component {
  //Error: 4 -> no need of {} if it's just plain text
  render() {
    return (
      <form>
        <input type="text" placeholder="Search..." />
        <p>
          <input type="checkbox" />
            Only show products in stock
        </p>
      </form>
    );
  }
}

class FilterableProductTable extends React.Component {
  render() {
    return (
      <div>
        <SearchBar />
        <ProductTable products={this.props.products} />
      </div>
    );
  }
}

const PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

ReactDOM.render(
  <FilterableProductTable products={PRODUCTS} />,
  document.getElementById('root')
);

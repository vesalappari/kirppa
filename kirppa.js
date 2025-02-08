document.addEventListener('DOMContentLoaded', function() {
    let products_sold = 6;
    let products_sold_price = 90;
    let unsold_products = 4;
    let unsold_products_price = 105;
    let cost_of_table = 35;
    let total_price_of_products = products_sold_price + unsold_products_price;

    document.getElementById('products_sold').textContent = products_sold;
    document.getElementById('unsold_products').textContent = unsold_products;
    document.getElementById('cost_of_table').textContent = cost_of_table;

    let sales_revenue = products_sold_price;
    let profit_without_table = sales_revenue;
    let profit_with_table = sales_revenue - cost_of_table;
    let sold_percentage_by_count = (products_sold / (products_sold + unsold_products)) * 100;
    let sold_percentage_by_price = (products_sold_price / total_price_of_products) * 100;

    document.getElementById('sales_revenue').textContent = sales_revenue.toFixed(2);
    document.getElementById('profit_without_table').textContent = profit_without_table.toFixed(2);
    document.getElementById('profit_with_table').textContent = profit_with_table.toFixed(2);
    document.getElementById('sold_percentage').textContent = sold_percentage_by_count.toFixed(2);
    document.getElementById('sold_percentage_by_price').textContent = sold_percentage_by_price.toFixed(2);
});
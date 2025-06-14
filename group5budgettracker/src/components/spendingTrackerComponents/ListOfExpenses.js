{/*list is accepting expenses as a prop*/}

export default function ListOfExpenses({ expenses }) {
    return(
        <div>
        <p>TODO: replace HTML table with MaterialUI  https://mui.com/x/react-data-grid/virtualization/</p>
        
    <table>
      <thead>
        <tr>
          <th>Name</th><th>Amount</th><th>Category</th><th>Date</th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((item, i) => (
          <tr key={i}>
            <td>{item.name}</td>
            <td>{item.amount}</td>
            <td>{item.category}</td>
            <td>{item.date}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
}
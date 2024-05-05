const Dashboard = () => {
  return (
    <div className="w-[100%] mt-16">
      <h1 className="text-3xl font-bold my-10 text-center">Dashboard</h1>

      <div className="p-8 flex flex-wrap items-center justify-center m-auto gap-10">

      {/* Sales Overview */}
      <section className="mb-8 w-1/4">
        <h2 className="text-xl font-bold mb-2 text-teal-400">Sales Overview</h2>
        <div className="bg-white p-4 rounded shadow font-medium text-gray-600">
          <p>Total Sales: $20,000</p>
          <p>Sales by Category: Fiction, Non-Fiction, Mystery</p>
          <p>Bestselling Books: "The Great Gatsby", "Educated", "Gone Girl"</p>
        </div>
      </section>

      {/* Inventory Status */}
      <section className="mb-8 w-1/4">
        <h2 className="text-xl font-bold mb-2 text-teal-400">Inventory Status</h2>
        <div className="bg-white p-4 rounded shadow font-medium text-gray-600">
          <p>Total Books in Stock: 600</p>
          <p>Low Stock Alerts: 10 books</p>
          <p>New Arrivals: "The Silent Patient", "Atomic Habits", "Where the Crawdads Sing"</p>
        </div>
      </section>

      {/* Order Management */}
      <section className="mb-8 w-1/4">
        <h2 className="text-xl font-bold mb-2 text-teal-400">Order Management</h2>
        <div className="bg-white p-4 rounded shadow font-medium text-gray-600">
          <p>Pending Orders: 5</p>
          <p>Completed Orders: 50</p>
          <p>Order History: View detailed order history</p>
        </div>
      </section>

      {/* Customer Insights */}
      <section className="mb-8 w-1/4">
        <h2 className="text-xl font-bold mb-2 text-teal-400">Customer Insights</h2>
        <div className="bg-white p-4 rounded shadow font-medium text-gray-600">
          <p>Number of Registered Customers: 200</p>
          <p>Customer Reviews: Positive feedback on "The Great Gatsby"</p>
          <p>Customer Engagement Metrics: High engagement on social media</p>
        </div>
      </section>

      {/* Book Recommendations */}
      <section className="mb-8 w-1/4">
        <h2 className="text-xl font-bold mb-2 text-teal-400">Book Recommendations</h2>
        <div className="bg-white p-4 rounded shadow font-medium text-gray-600">
          <p>Personalized Recommendations: Based on past purchases</p>
          <p>Featured Books: "Educated", "Sapiens", "The Alchemist"</p>
          <p>Special Offers: Buy 2, Get 1 Free on Mystery Books</p>
        </div>
      </section>

      {/* Store Performance */}
      <section className="mb-8 w-1/3">
        <h2 className="text-xl font-bold mb-4 text-teal-400">Store Performance</h2>
        <div className="bg-white p-4 rounded shadow font-medium text-gray-600">
          <p>Website Traffic: 1000 visits per day</p>
          <p>Conversion Rates: 5%</p>
          <p>Popular Search Terms: "Bestsellers", "Book Sale", "New Releases"</p>
        </div>
      </section>

      {/* Notification Center */}
      <section className="mb-8 w-1/3">
        <h2 className="text-xl font-bold mb-4 text-teal-400">Notification Center</h2>
        <div className="bg-white p-4 rounded shadow font-medium text-gray-600">
          <p>Important Announcements: Store will be closed on holidays</p>
          <p>New Book Releases: "The Midnight Library" now available</p>
          <p>Promotions and Discounts: Weekend Sale - 20% off on all books</p>
        </div>
      </section>

      {/* Settings */}
      <section>
        <h2 className="text-xl font-bold mb-2 w-1/4 text-teal-400">Settings</h2>
        <div className="bg-white p-4 rounded shadow font-medium text-gray-600">
          <p>Store Information: Update store address and contact details</p>
          <p>User Account Management: Add or remove staff accounts</p>
          <p>System Preferences: Customize dashboard settings</p>
        </div>
      </section>
    </div>
    </div>
  );
}

export default Dashboard;

import React from 'react'
import 
{ BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill}
 from 'react-icons/bs'
 import 
 { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } 
 from 'recharts';

function Home() {

    const data = [
  {
    name: 'Jan',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Feb',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Mar',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Apr',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'May',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Jun',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Jul',
    uv: 3490,
    pv: 4600,
    amt: 2100,
  },
  {
    name: 'Aug',
    uv: 3490,
    pv: 6000,
    amt: 6000,
  },
  {
    name: 'Sep',
    uv: 3490,
    pv: 4325,
    amt: 2100,
  },
  {
    name: 'Oct',
    uv: 3490,
    pv: 4464,
    amt: 2100,
  },
  {
    name: 'Nov',
    uv: 3490,
    pv: 4400,
    amt: 2100,
  },
  {
    name: 'Dec',
    uv: 3490,
    pv: 3300,
    amt: 2100,
  },
];
const table = [
    { productname: "Abstract", stock: 32 in stock, gender: "$45.99",Totalsales:"20", },
    { productname: "contract", stock: 32 in stock, gender: "$45.99",Totalsales:"20", },
    { productname: "sprphens illustartion", stock: 32 in stock, gender: "$45.99",Totalsales:"20", },
]
 
function App() {
    return (
        <div className="App">
            <table>
                <tr>
                    <th>Product name</th>
                    <th>Stock</th>
                    <th>Price</th>
                    <th>Total sales</th>
                </tr>
                {data.map((val, key) => {
                    return (
                        <tr key={key}>
                            <td>{val.name}</td>
                            <td>{val.age}</td>
                            <td>{val.gender}</td>
                        </tr>
                    )
                })}
            </table>
        </div>
    );
}

  return (
    <main className='main-container'>
        <div className='main-title'>
            <h3>Hello Manikandan</h3>
        </div>

        <div className='main-cards'>
            <div className='card'>
                <div className='card-inner'>
                    <h4>Earnings</h4>
                    <BsFillArchiveFill className='card_icon'/>
                </div>
                <h1>$198k</h1>
                <h4>+32.8% this month</h4>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h4>Orders</h4>
                    <BsFillGrid3X3GapFill className='card_icon'/>
                </div>
                <h1>$2.4k</h1>
                <h4>-2% this month</h4>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h4>Balance</h4>
                    <BsPeopleFill className='card_icon'/>
                </div>
                <h1>$2.4k</h1>
                <h4>-2% this month</h4>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h4>Tolal sales</h4>
                    <BsFillBellFill className='card_icon'/>
                </div>
                <h1>$89k</h1>
                <h4>+11% this month</h4>
            </div>
        </div>

        <div className='charts'>
            <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="pv" fill="#8884d8" background={{ fill: '#eee' }} />
        </BarChart>
      </ResponsiveContainer>

      <PieChart width={800} height={400} onMouseEnter={this.onPieEnter}>
        <Pie
          data={data}
          cx={120}
          cy={200}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Pie
          data={data}
          cx={420}
          cy={200}
          startAngle={180}
          endAngle={0}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
      

        </div>
    </main>
  )
}

export default Home
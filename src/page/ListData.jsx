import React, {useEffect, useState} from 'react';
import '../App.css'
function ListData() {

    const [data, setData] = useState([]);
    
    useEffect(() => {
        // fungsi ini akan dipanggil ketika komponen di mount

        // panggil API dengan fetch
        fetch('https://api.zelnara.com/api/informasi/doa?token=%242y%2410%24cOJgOSPlR%2FO26HfYFuJXAetgXB7E3N9esFiNwiZzEdkkHuzoh1dlS')
        .then(response => response.json())
        .then(result => {
            setData(result);
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }, []);
    // console.log(data.data);
    return (
        <>
        <div>
            {/*render data dari API  */}

            {/* {data.data.map(item => (
                <div>{item.nama}</div>
            ))} */}
        </div>

        {/*text html nya disini  */}
        <section className='tabel'>
            <p>Daftar Do'a</p>
            <table>
                <thead>
                    <tr>
                        <th>no</th>
                        <th>nama doa</th>
                        <th>arti</th>
                    </tr>
                </thead>
                <tbody>
                    {data.data.map((item, index) => (
                        <tr>
                            <td>{index + 1}</td>
                            <td>{item.nama}</td>
                            <td>{item.arti}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
        </>
    )
}

export default ListData
const sleep = ms => new Promise(r => setTimeout(r, ms));

async function run() {
    console.log('start code')
    await sleep(2000)
    console.log('half way')
    await sleep(2000)
    console.log('finished code')
}

run()

async function fetchData() {
    try {
        const res = await fetch('https://dummyjson.com/products/1')
        const data = await res.json()
        console.log(data)
    } catch (err) {
        console.error(err.message)
    }
}

fetchData()
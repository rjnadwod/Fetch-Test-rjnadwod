//import { Pool } from 'pg'
const Pool = require('pg').Pool
const date = new Date();
const pool = new Pool({
  user: 'rfnsrpsawvczde',
  host: 'ec2-54-83-82-187.compute-1.amazonaws.com',
  database: 'd1gtcq5q153qcc',
  password: 'e84fe3de96ecf9891ee6465869a2b98b5e41fbae6055a98262998d0890273ec0',
  port: 5432,
  ssl: { rejectUnauthorized: false },
})

const getTransactions = (req, res) => {
    pool.query('SELECT * FROM transaction', (error, results) => {
        if (error) 
            {throw error}
        res.status(200).json(results.rows)
    })
}

const getPayerBalances = (req, res) => {
    pool.query('SELECT payer, SUM(points) FROM transaction GROUP BY payer', (error, results) => {
        if (error) 
            {throw error}
        res.status(200).json(results.rows)
    })
}

const addTransaction = (req, res) => {
    const { payer, points, timestamp } = req.body

    pool.query('INSERT INTO transaction (timestamp, points, payer) VALUES ($1, $2, $3)', [timestamp, points, payer], (error, results) => {
        if (error) 
            {throw error}
        res.status(201).send(`Transaction added successfully.`)
    })
}

const getTransactionsByDate = (req, res) => {
    pool.query('SELECT * FROM transaction ORDER BY timestamp ASC', (error, results) => {
        if (error)
            {throw error}
        res.status(200).json(results.rows)
    })
}

const spendPoints = (req, res) => {
    var { pointsToSpend } = req.body

    console.log(Number(pointsToSpend))

        pool.query('SELECT * FROM transaction WHERE points != 0 ORDER BY timestamp ASC', (error, results) => {
            if (error)
                {throw error}
            data = results.rows
            
            data.forEach(row => {
                console.log(`Payer: ${row.payer} Points ${row.points} Timestamp: ${row.timestamp}`)
            });

            while (Number(pointsToSpend) > 0) {
                data.forEach(row => {
                    if (pointsToSpend > 0) {
                        pointsToSpend = pointsToSpend - row.points
                        row.points = 0
                        if (pointsToSpend < 0) {
                            row.points += Math.abs(pointsToSpend)
                            pointsToSpend += Math.abs(pointsToSpend)
                        }
                    }
                })
            }

            data.forEach(row => {
                pool.query(`UPDATE transaction SET points = ${row.points} WHERE transactionid = ${row.transactionid}`, (error, results) => {
                    if (error)
                        {throw error}
                })
            })

            pool.query('SELECT payer, SUM(points) FROM transaction GROUP BY payer', (error, results) => {
                if (error)
                    {throw error}
                res.status(200).json(results.rows)
            })
        })
}

module.exports = {
    getTransactions,
    getPayerBalances,
    addTransaction,
    getTransactionsByDate,
    spendPoints
}
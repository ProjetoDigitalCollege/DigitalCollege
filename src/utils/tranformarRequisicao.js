export const transformarRequisicao = async (path, method = 'GET', body) => {
          const response = await fetch('http://localhost:3000/api/' + path, {
                    body: JSON.stringify(body),
                    method,
                    headers: {
                              'Content-Type': 'application/json',
                              Authorization: localStorage.getItem('token')
                    }
          })
          return await response.json()
}

export default transformarRequisicao
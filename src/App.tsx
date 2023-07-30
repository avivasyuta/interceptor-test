import { useEffect, useState } from 'react'
import { BatchInterceptor } from '@mswjs/interceptors';
import { FetchInterceptor } from '@mswjs/interceptors/fetch';
import { XMLHttpRequestInterceptor } from '@mswjs/interceptors/XMLHttpRequest';
import './App.css'

const interceptor = new BatchInterceptor({
    name: 'mockiatoInterceptor',
    interceptors: [
        new FetchInterceptor(),
        new XMLHttpRequestInterceptor(),
    ],
});

interceptor.apply();

function App() {
    const [response, setResponse] = useState(null)

    useEffect(() => {
        const xhr = new XMLHttpRequest()

        xhr.open("GET", "http://localhost:3000/get-user", true);
        xhr.setRequestHeader('X-Custom-Header', '124')
        xhr.send(null);

        // fetch('http://localhost:3000/get-user', {
        //     headers: {
        //         'X-Custom-Header': '124',
        //     }
        // })
        //     .then((response) => {
        //         console.log('response', response)
        //         return response.json()
        //     })
        //     .then((json) => setResponse(json));
    }, [])

    return (
        <div className="card">
            <pre style={{
                width: '600px',
                textAlign: 'left',
                background: '#f4f4f4',
                padding: '20px',
                whiteSpace: 'pre-wrap'
            }}>
                {JSON.stringify(response, null, 4)}
            </pre>
        </div>
    )
}

export default App

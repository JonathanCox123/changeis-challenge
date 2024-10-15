import React, { useState, useEffect } from 'react';
import { getFakeData } from './services/fakeDataService';

const App: React.FC = () => {
    const [data, setData] = useState<any>(null);

    useEffect(() => {
        const fakeData = getFakeData();
        setData(fakeData);
    }, []);

    return (
        <div>
            <h1>Faker API Data</h1>
            {data ? (
                <div>
                    <p><strong>Name:</strong> {data.name}</p>
                    <p><strong>Email:</strong> {data.email}</p>
                    <p><strong>Address:</strong> {data.address}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default App;

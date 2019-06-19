import * as React from 'react';

const ThemeButton = React.lazy(() => import('./ThemeButton') );
const ColorButton = React.lazy(() => import('./ColorButton'));

const Toolbar: React.FC =  () => {
    return <div>
        <React.Suspense fallback={<div>Loading ... </div>}>
            <ThemeButton />
        </React.Suspense>
        <br />
        <React.Suspense fallback={<div>Loading ... </div>}>
            <ColorButton />
        </React.Suspense>
    </div>;
}

export default Toolbar;

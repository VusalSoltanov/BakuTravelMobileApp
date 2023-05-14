import { createContext, useEffect, useState } from "react";

interface SaveProviderProps {
    saves: any[]
    setSaves(item: any): void;
}

export const SaveContext = createContext<SaveProviderProps>({
    saves: [],
    setSaves: () => { }
});


export const FavoritesProvider   = ({ children } : any) => {
    
    
    
    //global state
    const [saves, setSaves] = useState<any[]>([])

    const values : SaveProviderProps = {
        saves,
        setSaves
    }

    return (
        <SaveContext.Provider value={values}>
            {children}
        </SaveContext.Provider>
    );
};
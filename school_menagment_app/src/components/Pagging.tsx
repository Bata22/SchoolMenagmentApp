"use client"

import { ITEM_PER_PAGE } from "@/lib/settings";
import { useRouter } from "next/navigation";


const Paigging = ({page, count}: {page:number; count: number}) => {

    const router = useRouter()
    const changePage = (newPage:number) => {
        const params = new URLSearchParams(window.location.search)
        params.set("page",newPage.toString())
        router.push(`${window.location.pathname}?${params}`)
    }
    const hasPerv = ITEM_PER_PAGE * (page - 1) > 0
    const hasNext = ITEM_PER_PAGE * (page - 1) +ITEM_PER_PAGE < count
    return (
        <div className="flex items-center justify-between p-4 text-gray-500">
            <button className="py-2 px-4 rounded-md bg-slate-200 text-xm font-semibold disabled:opacity-50 disabled:cursor-not-allowed" 
            disabled = {!hasPerv}  
            onClick={() => { 
                changePage(page - 1 )
                            }}>Perv</button>
            <div className="flex items-center gap-2 text-sm">
                {Array.from({length:Math.ceil(count/ITEM_PER_PAGE)} , (_, index) =>{
                    const pageIndex = index+1
                    return (
                        <button key={pageIndex} className={`px-2 rounded-sm bg-lamaSky ${page === pageIndex ? "bg-lamaSky" : "bg-white"}`}
                            onClick={() => {
                                changePage(pageIndex)
                            }}
                        >{pageIndex}
                        </button>
                    )
                } 
            )}
                
            </div>
            <button className="py-2 px-4 rounded-md bg-slate-200 text-xm font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
             disabled = {!hasNext}    
            onClick={() => {
                changePage(page + 1)
                            }}>Next</button>
        </div>
    )
}       

export default Paigging
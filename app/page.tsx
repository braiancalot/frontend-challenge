import { Saira_Stencil_One } from "next/font/google";

const sairaStencilOne = Saira_Stencil_One({
  subsets: ["latin"],
  weight: "400",
});

export default function Page() {
  return (
    <>
      <header className="bg-shape-1">
        <div className="max-w-[1120] m-auto flex justify-between items-center">
          <h1
            className={`${sairaStencilOne.className} text-[40px] text-text-header`}
          >
            capputeeno
          </h1>

          <div className="flex gap-6">
            <span>Search</span>

            <span>Carrinho</span>
          </div>
        </div>
      </header>

      <main>
        <div className="max-w-[1120] m-auto mt-8 flex justify-between items-center">
          <div className="flex gap-10">
            <span>TODOS OS PRODUTOS</span>
            <span>CAMISETAS</span>
            <span>CANECAS</span>
          </div>

          <select>
            <option>Novidades</option>
            <option>Mais vendidos</option>
          </select>
        </div>

        <div className="max-w-[1120] m-auto mt-4 flex justify-end">
          <div id="pagination">
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>4</button>
            <button>5</button>
            <button>&lt;</button>
            <button>&gt;</button>
          </div>
        </div>

        <div className="max-w-[1120] m-auto mt-8 flex gap-8 flex-wrap">
          <div className="h-[378px] w-[256px] border-1 rounded-lg text-center">
            Caneca
          </div>
          <div className="h-[378px] w-[256px] border-1 rounded-lg text-center">
            Caneca
          </div>
          <div className="h-[378px] w-[256px] border-1 rounded-lg text-center">
            Caneca
          </div>
          <div className="h-[378px] w-[256px] border-1 rounded-lg text-center">
            Caneca
          </div>
          <div className="h-[378px] w-[256px] border-1 rounded-lg text-center">
            Caneca
          </div>
          <div className="h-[378px] w-[256px] border-1 rounded-lg text-center">
            Caneca
          </div>
          <div className="h-[378px] w-[256px] border-1 rounded-lg text-center">
            Caneca
          </div>
          <div className="h-[378px] w-[256px] border-1 rounded-lg text-center">
            Caneca
          </div>
          <div className="h-[378px] w-[256px] border-1 rounded-lg text-center">
            Caneca
          </div>
        </div>

        <div className="max-w-[1120] m-auto mt-[74] mb-[60] flex justify-end">
          <div id="pagination">
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>4</button>
            <button>5</button>
            <button>&lt;</button>
            <button>&gt;</button>
          </div>
        </div>
      </main>
    </>
  );
}

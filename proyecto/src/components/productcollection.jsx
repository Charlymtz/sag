import energyart from '../img/energyart.png'
import plastic from '../img/plastic.png'
import pingu from '../img/pingu.png'

function Productcollection() {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-gray-900" >
        {/* Primer producto */}
        <article className="group bg-slate-800 text-white">
          <img
            alt=""
            src={energyart}
            className="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
          />
  
          <div className="p-4">
            <a href="#" className="hover:underline">
              <h3 className="text-lg font-medium">
                Finding the Journey to Mordor
              </h3>
            </a>
  
            <p className="mt-2 line-clamp-3 text-sm/relaxed">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus
              pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis
              quidem, mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius
              atque dignissimos. Molestias explicabo corporis voluptatem?
            </p>
          </div>
        </article>
  
        {/* Segundo producto */}
        <article className="group bg-slate-800 text-white">
          <img
            alt=""
            src={pingu}
            className="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
          />
  
          <div className="p-4">
            <a href="#" className="hover:underline">
              <h3 className="text-lg font-medium">
                Finding the Journey to Mordor
              </h3>
            </a>
  
            <p className="mt-2 line-clamp-3 text-sm/relaxed">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus
              pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis
              quidem, mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius
              atque dignissimos. Molestias explicabo corporis voluptatem?
            </p>
          </div>
        </article>
         {/* Segundo producto */}
         <article className="group bg-slate-800 text-white">
          <img
            alt=""
            src={plastic}
            className="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
          />
  
          <div className="p-4">
            <a href="#" className="hover:underline">
              <h3 className="text-lg font-medium">
                Finding the Journey to Mordor
              </h3>
            </a>
  
            <p className="mt-2 line-clamp-3 text-sm/relaxed">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus
              pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis
              quidem, mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius
              atque dignissimos. Molestias explicabo corporis voluptatem?
            </p>
          </div>
        </article>
        {/* Puedes agregar más productos siguiendo el mismo patrón */}
      </div>
    );
  }
  
  export default Productcollection;
  
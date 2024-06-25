export default function Modal() {
  let imgSrc =
    "https://images.unsplash.com/photo-1528622037179-9a6b94d08d12?q=80&w=1633&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  // let imgSrc="https://images.unsplash.com/photo-1707929376873-23bfa785dc1d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <div className="fixed inset-0 z-10 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 text-center">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>
        <div
          className={`inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform  sm:align-middle w-full h-[95vh]`}
        >
          <div class="flex flex-col items-center justify-center">
            <div class="flex min-h-screen h-screen">
              <img
                class="h-auto object-contain md:object-cover max-w-full drop-shadow-md"
                src={imgSrc}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

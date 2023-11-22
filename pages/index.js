import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const [inputValue, setInputValue] = useState("");
  const [firstSquare, setFirstSquare] = useState([]);
  const [secondSquares, setSecondSquares] = useState([]);
  const [thirdSquares, setThirdSquares] = useState([]);
  const [number, setNumber] = useState(0.5);

  const create = (e) => {
    e.preventDefault();
    console.log(typeof inputValue);
    const cat = inputValue.split(";");
    console.log(cat);

    const first = cat[0].replace(";", "").split(" ");
    const x1 = JSON.parse(first[0]);
    const y1 = JSON.parse(first[1]);
    const width1 = JSON.parse(first[2]);
    const height1 = JSON.parse(first[3]);

    setFirstSquare({
      x1,
      y1,
      width1,
      height1,
    });

    const second = cat[1].replace(";", "").replace("\n", "").split("\n");
    let square2 = [];
    second.map((obj) => {
      const str = obj.split(" ");
      let item = [];
      str.map((value) => {
        item.push(JSON.parse(value));
      });
      square2.push(item);
    });
    setSecondSquares(square2);

    const third = cat[2].replace(";", "").replace("\n", "").split("\n");
    let square3 = [];
    third.map((obj) => {
      const str = obj.split(" ");
      let item = [];
      str.map((value) => {
        item.push(JSON.parse(value));
      });
      square3.push(item);
    });
    setThirdSquares(square3);

    // let obj2 = [];
    // const str2 = cat[1].split(" ");
    // str2.map((item) => {
    //   obj2.push(JSON.parse(item));
    // });

    // let i = 0;
    // let second = [];
    // while (i < obj2.length / 4) {
    //   second.push(obj2.slice(i * 4, (i + 1) * 4));
    //   i++;
    // }
    // setSecondSquares(second);

    // let obj3 = [];
    // const str3 = cat[2].split(" ");
    // str3.map((item) => {
    //   obj3.push(JSON.parse(item));
    // });

    // let j = 0;
    // let third = [];
    // while (j < obj3.length / 4) {
    //   third.push(obj3.slice(j * 4, (j + 1) * 4));
    //   j++;
    // }
    // setThirdSquares(third);
    // console.log(third);

    // setInputValue(""); // 清空輸入框
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const size = (e) => {
    setNumber(e.target.value);
  };

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <form action="" onSubmit={create} style={{ display: "block" }}>
          <textarea
            type="text"
            style={{ width: "30%", height: "300px" }}
            value={inputValue}
            onChange={handleInputChange}
          />
          <button>輸入</button>
        </form>
        <label htmlFor="size">放大倍率：</label>
        <input
          id="size"
          type="number"
          step="0.1"
          min="0.1"
          placeholder="預設值是0.5"
          onChange={size}
        />
        <div
          id="container"
          style={{
            position: "relative",
            marginTop: "2rem",
          }}
        >
          {/* firstSquare */}
          {firstSquare.length !== 0 ? (
            <div
              style={{
                position: "absolute",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: `${number * firstSquare.width1}px`,
                height: `${number * firstSquare.height1}px`,
                border: "3px solid",
                left: `${number * firstSquare.x1}px`,
                top: `${number * firstSquare.y1}px`,
                // zIndex: 100,
                // transform: `translateY(${-(5 * square.y)}px)`,
              }}
            >
              {/* ({firstSquare.x1} , {firstSquare.y1}) */}
            </div>
          ) : (
            ""
          )}

          {/* secondSquare */}
          {secondSquares?.map((square, index) => (
            <div
              key={index}
              title={`編號${index + 1}
座標：(${square[0]} , ${square[1]})
寬：${square[2]}
高：${square[3]}`}
              style={{
                position: "absolute",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: `${number * square[2]}px`,
                height: `${number * square[3]}px`,
                border: "0.5px solid",
                color: "gray",
                backgroundColor: "rgba(211, 211, 211, 0.5)",
                fontSize: "1.5rem",
                fontWeight: "bold",
                left: `${number * square[0]}px`,
                top: `${number * square[1]}px`,
              }}
            >
              {/* ({square[0]} , {square[1]}) */}灰{index + 1}
            </div>
          ))}

          {/* thirdSquare */}
          {console.log(thirdSquares)}
          {thirdSquares?.map((square, index) => (
            <div
              key={index}
              title={`編號${index + 1}
座標：(${square[0]} , ${square[1]})
寬：${square[2]}
高：${square[3]}`}
              style={{
                position: "absolute",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: `${number * square[2]}px`,
                height: `${number * square[3]}px`,
                border: "0.5px solid",
                color: "green",
                backgroundColor: "rgba(144, 238, 144, 0.5)",
                fontSize: "1.5rem",
                fontWeight: "bold",
                left: `${number * square[0]}px`,
                top: `${number * square[1]}px`,
              }}
            >
              {/* ({square[0]} , {square[1]}) */}綠{index + 1}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

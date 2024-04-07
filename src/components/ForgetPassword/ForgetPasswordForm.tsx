import { useState } from "react";
import { usePostApiEmailSendForgotPassword } from "../../API";

function ForgetPassword() {
  const { mutate: addForgotPassword, error } =
    usePostApiEmailSendForgotPassword();
  const [email, setEmail] = useState("123testtest01@gmail.com"); // 增加狀態來保存郵件地址
  const [message, setMessage] = useState(""); // 新增一個狀態來保存發送郵件的提示信息

  const handleAddPet = () => {
    addForgotPassword(
      { data: { email: email } },
      {
        onSuccess: () => {
          // 在發送郵件成功時設置提示信息
          setMessage("郵件已經發送至您的信箱，請檢查。");
        },
        onError: () => {
          // 在發送郵件失敗時也可以設置相應的提示信息
          setMessage("發送郵件失敗，請稍後再試。");
        },
      }
    );
  };
  if (error) return <div>錯誤警報錯誤警報 {error.message}</div>;

  return (
    <div>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="請輸入信箱"
      />
      <button onClick={handleAddPet}>發送至信箱</button>
      {message && <div>{message}</div>} {/* 在這裡顯示發送郵件的提示信息 */}
    </div>
  );
}

export default ForgetPassword;

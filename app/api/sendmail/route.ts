// app/api/sendmail/route.ts
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "artstyles.dev@gmail.com", // ใส่อีเมลของมึง
        pass: "alal dfth fkqh ylwi", // ต้องสร้าง App Password
      },
    });

    const mailOptions = {
      from: "artstyles.dev@gmail.com", // ต้องตรงกับ auth.user
      to: "artstyles.dev@gmail.com", // รับเมลเข้ากล่องของมึง
      subject: `Message from ${name} <${email}>`, // ใส่ชื่อ+เมลผู้ส่งใน subject
      text: `ผู้ส่ง: ${name} <${email}>\n\n${message}`, // ใส่รายละเอียดผู้ส่งใน body
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ ok: true, message: "ส่งเมลเรียบร้อย!" });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ ok: false, message: "ส่งเมลไม่สำเร็จ" });
  }
}

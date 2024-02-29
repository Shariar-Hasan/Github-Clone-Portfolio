import { basicInfo } from '@/utils/userInfoContants'
import { type NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
// Nodemailer setup (use your email service provider's SMTP settings)
const transporter = nodemailer.createTransport({
  service: process.env.MAIL_SERVICE,
  auth: {
    user: process.env.SENDER_MAIL, // Your email address
    pass: process.env.SENDER_PASS, // Your email password or app-specific password
  },
})

export const POST = async (req: NextRequest) => {
  try {
    const data = await req.json()
    const mailOptions = {
      to: process.env.SENDER_MAIL,
      subject: 'New Contact message from Your Portfolio - GC',
      html: `
        <div>
            <h1>Hello ${basicInfo?.name}</h1>
            <h2>New Contact message from Your Portfolio - GC</h2>
            <table 
                style="border-collapse: collapse; width: 100%; border: 1px solid #000; text-align: left;"
            >
                <tr>
                    <th style="padding: 10px">Sender Name:</th>
                    <td style="padding: 10px">${data?.name}</td>
                </tr>
                <tr>
                    <th style="padding: 10px">Sender Email:</th>
                    <td style="padding: 10px">${data?.email}</td>
                </tr>
                <tr>
                    <th style="padding: 10px">Sent Message:</th>
                    <td style="padding: 10px">${data?.message}</td>
                </tr>
            </table>
        </div>
    `,
    }
    transporter.sendMail(mailOptions)
    return NextResponse.json({ data: data, success: true })
  } catch (err) {
    // console.log({ err });
    return NextResponse.json({ data: err, success: false })
  }
}

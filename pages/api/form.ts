import moment from 'moment';
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  message: string
}

type FormData = {
  name: string
  contact: string
  details: string
}

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  if (req.method !== 'POST') {
    return res.status(404).json({ message: 'Not found' });
  }

  if (!process.env.DISCORD_WEBHOOK_URL) {
    console.error('[/api/form] error: Discord webhook URL is missing');
    return res.status(500).json({
      message:
        'Missing configuration. Please contact me to fix this issue. Thank you',
    });
  }

  const { name, contact, details }: FormData = req.body;
  const time = moment().utcOffset(7).format('DD/MM/YYYY, HH:mm:ss');
  const apiData = {
    username: 'Website Form',
    embeds: [
      {
        title: name,
        description: `**Contact**: ${contact}\n**Time**: ${time}\n**Details**:\n ${details}`,
        color: 3447003,
      },
    ],
  };

  try {
    await fetch(process.env.DISCORD_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(apiData),
    });
    return res.status(200).json({
      message:
        'Your form has been saved successfully. Thank you for contacting me',
    });
  } catch (error) {
    console.error('[/api/form] error: ', error);
    return res.status(500).json({
      message:
        'Something went wrong. Please contact me via other method or try again later',
    });
  }
};

export default handler;
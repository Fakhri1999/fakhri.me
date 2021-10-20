import axios from 'axios';
import moment from 'moment';

const handler = async (req, res) => {
  if (req.method != 'POST') {
    return res.status(404).json({ message: 'Not found' });
  }

  const { name, contact, details } = req.body;
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
    const result = await axios({
      url: process.env.DISCORD_WEBHOOK_URL,
      method: 'POST',
      data: apiData,
    });
    return res.status(200).json({
      message:
        'Your form has been saved successfully. Thank you for contacting me',
    });
  } catch (error) {
    return res.status(500).json({
      message:
        'Something went wrong. Please contact me via other method or try again later',
    });
  }
};

export default handler;

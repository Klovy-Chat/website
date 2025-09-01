import type { NextApiRequest, NextApiResponse } from 'next';

// Ustaw swój token bota Discorda w .env.local jako DISCORD_BOT_TOKEN
const DISCORD_BOT_TOKEN = process.env.DISCORD_BOT_TOKEN;

if (!DISCORD_BOT_TOKEN) {
  throw new Error('Brak DISCORD_BOT_TOKEN w zmiennych środowiskowych!');
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { userId } = req.query;
  if (!userId || typeof userId !== 'string') {
    return res.status(400).json({ error: 'Brak userId' });
  }

  try {
    const response = await fetch(`https://discord.com/api/v10/users/${userId}`, {
      headers: {
        Authorization: `Bot ${DISCORD_BOT_TOKEN}`,
      },
    });
    if (!response.ok) {
      console.error('Discord API error:', response.status, await response.text());
      return res.status(response.status).json({ error: 'Nie udało się pobrać danych z Discord API', status: response.status });
    }
    const data: {
      id: string;
      avatar: string | null;
      discriminator: string;
      username: string;
    } = await response.json();
    // Zwróć tylko potrzebne dane
    return res.status(200).json({
      id: data.id,
      avatar: data.avatar, // avatar_hash lub null
      discriminator: data.discriminator,
      username: data.username,
    });
  } catch (e) {
    console.error('API server error:', e);
    return res.status(500).json({ error: 'Błąd serwera' });
  }
}

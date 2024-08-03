'use server';

import { sendEmail } from '@/utils/sendEmail';
import { baseTemplate } from 'emailTemplates';
import { getServerSession } from 'next-auth';
import { authOptions } from 'pages/api/auth/[...nextauth]';

export async function SendTeamInvitationEmail({
  email,
}: {
  email: string;
}): Promise<any> {
  const session = await getServerSession(authOptions);
  let user;
  if (session) {
    user = session.user;
  }

  let emailContent: any;

  emailContent = baseTemplate({
    title: 'You have been invited to join a TeamUp team!',
    subtitle:
      'Welcome to TeamUp! You have been invited to join a team.<br>Click the button below to access your dashboard and join the team.',
    buttonLink: `${process.env.NEXT_URL}/join-team?teamId=${user.teamId}`,
    buttonText: 'Go to dashboard and join team',
    additionalText: '',
  });

  await sendEmail({
    to: email,
    subject: 'TeamUp Team Invitation',
    html: emailContent,
  });
}

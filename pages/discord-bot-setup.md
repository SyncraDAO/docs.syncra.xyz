# Syncra Discord Bot Setup Guide

Our bot is designed to streamline communication and updates for DAOs directly within your Discord server. Follow the steps below to invite the bot to your server and set it up to start receiving real-time notifications about DAO proposals events.

## Inviting the Bot to Your Server

The bot invite link can be found on the Syncra platform or directly accessed via:

https://discord.com/api/oauth2/authorize?client_id=1204804908524507147&permissions=534723947584&scope=bot

## Setting Up the Bot

Once the bot is added to your server, you need to configure it to start receiving DAO notifications.

### Using Slash Commands

The Syncra bot uses slash commands for easy setup and configuration. Here’s how to get started:

1. Accessing Commands:

Type `/` in the message input area of any text channel where the bot has permissions. You'll see a list of available commands for the Syncra bot.

![setup commands](/img/bot/setup-commands.png)

2. Setup Command:

Use the /setup command to configure the bot for your server. This command requires two parameters:
* **dao_address**: The contract address of the DAO you want to receive notifications for.
* **channel_for_notifications**: The Discord channel where notifications should be sent.

### Example:

![setup](/img/bot/setup.png)

### Confirmation:

After executing the setup command, the bot will confirm that notifications have been configured.

![setup confitmation](/img/bot/setup-confirmation.png)

### Admin Permissions

The `/setup` command requires server admin permissions to execute. This ensures that only authorized users can configure the bot settings.

## Support and Troubleshooting

If you encounter any issues or have questions regarding the Syncra bot, please visit our support channel on Discord. Our community and support team are ready to assist you.

Thank you for choosing Syncra to enhance your DAO experience on Discord!

# Generated by Django 4.0.6 on 2023-02-18 07:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('server', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='inventory',
            name='name',
            field=models.CharField(blank=True, max_length=200, null=True),
        ),
    ]

# Generated by Django 4.2.1 on 2023-05-05 18:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='plan',
            name='fecha_inicio',
        ),
        migrations.AddField(
            model_name='plan',
            name='precio',
            field=models.PositiveSmallIntegerField(default=0),
            preserve_default=False,
        ),
    ]

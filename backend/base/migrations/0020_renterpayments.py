# Generated by Django 4.0.1 on 2022-03-02 04:38

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0019_alter_product_image'),
    ]

    operations = [
        migrations.CreateModel(
            name='RenterPayments',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('rent', models.DecimalField(blank=True, decimal_places=2, max_digits=7, null=True)),
                ('rentIsPaid', models.BooleanField(default=False)),
                ('rentIsPaidAt', models.DateTimeField(blank=True, null=True)),
                ('waterIsPaid', models.BooleanField(default=False)),
                ('waterIsPaidAt', models.DateTimeField(blank=True, null=True)),
                ('water', models.DecimalField(blank=True, decimal_places=2, max_digits=7, null=True)),
                ('electricIsPaid', models.BooleanField(default=False)),
                ('electricIsPaidAt', models.DateTimeField(blank=True, null=True)),
                ('renter_name', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='base.apartment')),
            ],
        ),
    ]
from django.db import models

class Farm(models.Model):
    farm_name = models.CharField(max_length=100)
    county = models.CharField(max_length=100)
    crop_type = models.CharField(max_length=100)
    acres = models.FloatField()

    latitude = models.FloatField()
    longitude = models.FloatField()

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.farm_name


from django.db import models

class TreeAnalysis(models.Model):
    farm = models.ForeignKey(Farm, on_delete=models.CASCADE, related_name="analyses")
    total_tree_count = models.IntegerField(default=0)
    healthy = models.IntegerField(default=0)
    needs_care = models.IntegerField(default=0)
    needs_replacement = models.IntegerField(default=0)
    canopy_coverage_pct = models.FloatField(default=0)
    analysis_id = models.CharField( max_length=100, blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Analysis {self.id}"